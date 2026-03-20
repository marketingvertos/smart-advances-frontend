import { Link } from "react-router-dom";

const BlogCard = ({ blog }: any) => {

  return (

    <Link to={`/blog/${blog.slug}`}>

      <div className="bg-background border rounded-2xl p-5 hover:shadow-lg transition">

        <span className="text-xs text-primary font-medium">
          {blog.category}
        </span>

        <h3 className="font-bold mt-2 mb-2">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {blog.description}
        </p>

      </div>

    </Link>

  );

};

export default BlogCard;