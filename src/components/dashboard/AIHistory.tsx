import { Bot } from "lucide-react";

interface Props {
  chats: string[];
}

export default function AIHistory({
  chats,
}: Props) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <h2 className="mb-6 text-2xl font-black">
        AI Chat History
      </h2>

      <div className="space-y-4">

        {chats.map((chat) => (

          <div
            key={chat}
            className="flex items-center gap-4 rounded-2xl bg-stone-50 p-4"
          >

            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
              <Bot size={20} />
            </div>

            <span>{chat}</span>

          </div>

        ))}

      </div>

    </section>
  );
}