import { h } from "preact";
import Style from "./style";
import Blogheader from "../../components/blogheader";

const Article = () => (
  <div className={Style.article}>
	<Blogheader/>
    <p className={Style.markdown}>
      Some markdown text
    </p>
  </div>
);

export default Article;
