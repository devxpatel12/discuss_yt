import PostList from "@/components/posts/post-list";
import { fetchPostBySearch } from "@/lib/query/post";
import React from "react";

type SearchPageProps = {
  searchParams: Promise<{ term: string }>;
};

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const term = (await searchParams).term;

  return (
    <div>
      <h1 className="text-blue-600 font-medium italic">
        Search result for {term}
      </h1>
      <PostList fetchData={() => fetchPostBySearch(term)} />
    </div>
  );
};

export default SearchPage;
