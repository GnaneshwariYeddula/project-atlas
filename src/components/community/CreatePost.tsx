"use client";

import { Image, Send } from "lucide-react";
import { useState } from "react";

interface CreatePostProps {
  onCreated: () => Promise<void>;
}

export default function CreatePost({ onCreated }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function publishPost() {
    if (!content.trim() || submitting) return;

    setSubmitting(true);

    try {
      const { createPost } = await import("@/services/community");
      await createPost({
        title: content.trim().slice(0, 80),
        content: content.trim(),
      });
      setContent("");
      await onCreated();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-3xl font-black">

          Create a Discussion

        </h2>

        <textarea
          rows={5}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Share your thoughts, discoveries or ask a question..."
          className="w-full rounded-2xl border border-stone-300 p-5 outline-none focus:border-emerald-600"
        />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

          <button className="flex items-center gap-2 rounded-xl border border-stone-300 px-5 py-3">

            <Image size={20} />

            Add Image

          </button>

          <button
            type="button"
            onClick={publishPost}
            disabled={!content.trim() || submitting}
            className="flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white disabled:opacity-50"
          >

            <Send size={18} />

            Publish

          </button>

        </div>

      </div>

    </section>
  );
}
