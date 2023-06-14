import axios from "axios";
import PostsPopup from "../components/PostsPopup.vue";
import { defineComponent } from "vue";

type postType = {
  id?: number;
  userId: number;
  body: string;
  title: string;
};

export default defineComponent({
  components: {
    PostsPopup,
  },
  data() {
    return {
      userNamesData: [
        { id: 1, name: "User1" },
        { id: 2, name: "User2" },
      ],
      isPopupOpen: false,
      postsData: [] as postType[],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?userId=1&userId=2")
        .then((response) => (this.postsData = response.data))
        .catch(() => (this.postsData = []));
    },
    postData(data: postType) {
      return axios
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
          this.postsData.unshift(response.data);
        });
    },
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    addPost(data: postType) {
      this.postData(data).then(() => (this.isPopupOpen = false));
    },
    getUserNameById(id: number) {
      return this.userNamesData.find((item) => item.id === id)?.name;
    },
  },
});
