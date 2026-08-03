"use client";

import { useCallback, useEffect, useState } from "react";

import CreatePost from "./CreatePost";
import DiscussionGrid from "./DiscussionGrid";
import { CommunityPost, getPosts } from "@/services/community";

export default function CommunityContainer() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);

  const loadPosts = useCallback(async () => {
    try {
      const response = await getPosts();
      setPosts(response.posts ?? []);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  return (
    <>
      <CreatePost onCreated={loadPosts} />
      <DiscussionGrid discussions={posts} />
    </>
  );
}
