export const state = () => {
  return {
    postContent: []
  }

}
// 存放的是同步修改state的方法
export const mutations = {
  storePostContent(state, data) {
    state.postContent.unshift(data);
  },
  deletePostContent(state, index) {
    state.postContent.splice(index, 1);
  }
}
