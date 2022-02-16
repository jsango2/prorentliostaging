import React from "react"
import { UserLogosWrap } from "./styles.js"
import Users from "../../../public/images/users.png"

const UserLogos = () => {
  return (
    <UserLogosWrap>
      <img src={Users} alt="users" width="80%" />
    </UserLogosWrap>
  )
}

export default UserLogos
