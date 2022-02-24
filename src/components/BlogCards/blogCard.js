import React from "react"
import { WrapBlogCard, Title, ImageWrap, Image } from "./styles"

const BlogCard = ({ photo, title, link }) => {
  return (
    <WrapBlogCard href={link}>
      <ImageWrap>
        <Image photo={photo} className="image" />
      </ImageWrap>
      <Title>{title}</Title>
    </WrapBlogCard>
  )
}

export default BlogCard
