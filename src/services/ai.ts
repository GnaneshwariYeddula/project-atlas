import api from "@/lib/api";

export interface AIStreamCallbacks {
  onChunk: (text: string) => void;
  onComplete?: () => void;
}

export const chatWithAI = async (
  message: string,
  callbacks: AIStreamCallbacks,
  signal?: AbortSignal
): Promise<void> => {
  const baseURL =
    api.defaults.baseURL;

  if (!baseURL) {
    throw new Error(
      "API base URL is not configured."
    );
  }

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem(
          "atlas_token"
        )
      : null;

  const response = await fetch(
    `${baseURL}/ai/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
      },

      body: JSON.stringify({
        message: message.trim(),
      }),

      signal,
    }
  );

  if (!response.ok) {
    let errorMessage =
      "AI request failed.";

    try {
      const data =
        await response.json();

      errorMessage =
        data?.message ||
        data?.error ||
        errorMessage;
    } catch {
      // Keep default error.
    }

    throw new Error(errorMessage);
  }

  if (!response.body) {
    throw new Error(
      "AI service did not return a streaming response."
    );
  }

  const reader =
    response.body.getReader();

  const decoder =
    new TextDecoder();

  let buffer = "";

  try {
    while (true) {
      const {
        value,
        done,
      } = await reader.read();

      if (done) {
        break;
      }

      buffer += decoder.decode(
        value,
        {
          stream: true,
        }
      );

      const events =
        buffer.split("\n\n");

      buffer =
        events.pop() ?? "";

      for (const event of events) {
        const lines =
          event.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data:")) {
            continue;
          }

          const data =
            line.slice(5).trim();

          if (!data) {
            continue;
          }

          let payload: {
            type?: string;
            text?: string;
            message?: string;
          };

          try {
            payload =
              JSON.parse(data);
          } catch {
            continue;
          }

          if (
            payload.type ===
              "chunk" &&
            payload.text
          ) {
            callbacks.onChunk(
              payload.text
            );
          }

          if (
            payload.type ===
            "error"
          ) {
            throw new Error(
              payload.message ||
                "AI request failed."
            );
          }

          if (
            payload.type ===
            "done"
          ) {
            callbacks.onComplete?.();

            return;
          }
        }
      }
    }

    callbacks.onComplete?.();
  } finally {
    reader.releaseLock();
  }
};