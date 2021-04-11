import { PostData } from '../../@types/posts';
import { POSTS_URL } from '../../config/appConfig';
import fetchJson from '../../utils/fetchJson';

const getPost = async (
  id: string | string[] | undefined,
): Promise<PostData> => {
  const idString = Array.isArray(id) ? id[0] : id;
  const url = `${POSTS_URL}?id=${idString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  return jsonPost[0];
};

export default getPost;