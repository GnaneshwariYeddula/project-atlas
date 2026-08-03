import { Mail, Globe2, BookOpen, Heart } from "lucide-react";

interface Props {
  profile: {
    fullName: string;
    email: string;
    favorites: number;
    articles: number;
  };
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-black">
        Profile Overview
      </h2>

      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <Mail className="text-indigo-700" />

          <span>{profile.email}</span>
        </div>

        <div className="flex items-center gap-4">
          <Globe2 className="text-indigo-700" />

          <span>History Explorer</span>
        </div>

        <div className="flex items-center gap-4">
          <BookOpen className="text-indigo-700" />

          <span>{profile.articles} Articles Read</span>
        </div>

        <div className="flex items-center gap-4">
          <Heart className="text-red-500" />

          <span>{profile.favorites} Favorites Saved</span>
        </div>
      </div>
    </div>
  );
}