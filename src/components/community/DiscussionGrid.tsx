import DiscussionCard from "./DiscussionCard";

interface Discussion {
  _id: string;
  title: string;
  author: { fullName: string };
  comments: unknown[];
  likes: unknown[];
}

interface DiscussionGridProps {
  discussions: Discussion[];
}

export default function DiscussionGrid({ discussions }: DiscussionGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid gap-8 lg:grid-cols-3">

        {discussions.map((discussion) => (

          <DiscussionCard
            key={discussion._id}
            title={discussion.title}
            author={discussion.author.fullName}
            replies={discussion.comments.length}
            likes={discussion.likes.length}
            views={0}
          />

        ))}

      </div>

    </section>
  );
}
