import React from "react";

import { Container, Description, Image, PostCard } from "./PostStyles";

function Post(props) {
  return (
    <Container>
      <PostCard>
        <Image>
          <img src={props.post.imageUrl} alt="" />
        </Image>
        <Description>
          <div>
            <div>
              <img src="../images/location.png" alt="" />
              <h4>{props.post.location}</h4>
            </div>
            <a href="">View on google map</a>
          </div>
          <h2>{props.post.title}</h2>
          <p>
            <b>
              {props.post.startDate} - {props.post.endDate}
            </b>
          </p>
          <p>{props.post.description}</p>
        </Description>
      </PostCard>
    </Container>
  );
}

export default Post;
