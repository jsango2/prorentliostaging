import React from "react"
import { WrapBlogCardsSection } from "./styles"
import p1 from "../../../public/images/blogcard1.png"
import p2 from "../../../public/images/blogcard2.png"
import p3 from "../../../public/images/blogcard3.png"
import BlogCard from "./blogCard"

const BlogCards = () => {
  return (
    <WrapBlogCardsSection>
      <BlogCard
        photo={p1}
        title="Samo je jedan trend u turizmu – digitalna transformacija"
        link="https://www.rentl.io/1"
      />
      <BlogCard
        photo={p2}
        title="Kada je pravo vrijeme za promjenu PMS-a i channel managera?"
        link="https://www.rentl.io/2"
      />

      <BlogCard
        photo={p3}
        title="Važnost dvosmjerne veze PMS sustava"
        link="https://www.rentl.io/3"
      />
    </WrapBlogCardsSection>
  )
}

export default BlogCards
