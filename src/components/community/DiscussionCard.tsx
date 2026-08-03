import {
  MessageSquare,
  ThumbsUp,
  Eye,
} from "lucide-react";

interface DiscussionCardProps {
  title: string;
  author: string;
  replies: number;
  likes: number;
  views: number;
}

export default function DiscussionCard({
  title,
  author,
  replies,
  likes,
  views,
}: DiscussionCardProps) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <h3 className="text-2xl font-black">

        {title}

      </h3>

      <p className="mt-3 text-stone-500">

        Posted by {author}

      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-stone-600">

        <div className="flex items-center gap-2">

          <MessageSquare size={18} />

          {replies}

        </div>

        <div className="flex items-center gap-2">

          <ThumbsUp size={18} />

          {likes}

        </div>

        <div className="flex items-center gap-2">

          <Eye size={18} />

          {views}

        </div>

      </div>

    </div>
  );
}