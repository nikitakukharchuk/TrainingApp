import { ReactComponent as ThumbsUp } from 'assets/icons/thumbsUp.svg';
import { ReactComponent as ThumbsDown } from 'assets/icons/thumbsDown.svg';
import { ReactComponent as Bookmark } from 'assets/icons/bookmark.svg';
import { ReactComponent as More } from 'assets/icons/more.svg';

import { PostCardProps } from 'components/PostCard/types';
import {
  PostContainer,
  PostControlIcon,
  PostControlsContainer,
  PostControlsGroup,
  PostDate,
  PostDetailsContainer,
  PostImage,
  PostText,
  PostTitle
} from 'components/PostCard/styled';
import { getFormattedDate } from 'utils';

export function PostCard({ post }: PostCardProps) {
  return (
    <PostContainer>
      <PostDetailsContainer>
        <PostDate>{getFormattedDate(post.date)}</PostDate>
        <PostTitle>{post.title}</PostTitle>
        <PostText>{post.text}</PostText>
      </PostDetailsContainer>
      {post.image ? <PostImage src={post.image} /> : null}
      <PostControlsContainer>
        <PostControlsGroup>
          <PostControlIcon>
            <ThumbsUp />
          </PostControlIcon>
          <PostControlIcon>
            <ThumbsDown />
          </PostControlIcon>
        </PostControlsGroup>
        <PostControlsGroup>
          <PostControlIcon>
            <Bookmark />
          </PostControlIcon>
          <PostControlIcon>
            <More />
          </PostControlIcon>
        </PostControlsGroup>
      </PostControlsContainer>
    </PostContainer>
  );
}
