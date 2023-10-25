const PostsPage = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-2 h-60 bg-emerald-100 border border-solid border-black">
        <h2>기술</h2>
      </div>
      <div className="h-60 bg-amber-100 border border-solid border-black">
        <h2>일상</h2>
      </div>
      <div className="h-40 bg-rose-100 border border-solid border-black">
        <h2>취미</h2>
      </div>
      <div className="col-span-2 h-40 bg-violet-100 border border-solid border-black">
        <h2>사회</h2>
      </div>
    </div>
  );
};

export default PostsPage;
