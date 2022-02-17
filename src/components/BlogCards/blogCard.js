import React from "react"
import { WrapBlogCard, Title, ImageWrap } from "./styles"

const BlogCard = ({ photo, title, link }) => {
  return (
    <WrapBlogCard href={link}>
      <ImageWrap>
        <img src={photo} alt="photo" width="100%" />
      </ImageWrap>
      <Title>{title}</Title>
    </WrapBlogCard>
  )
}

export default BlogCard
