import { defineComponent } from "vue";
export default defineComponent({
  props: {
    userNamesData: [Object],
  },
  data() {
    return {
      title: "",
      body: "",
      user: "",
      isTitleError: false,
      isBodyError: false,
      isUserError: false,
      isDisabled: true,
    };
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
      this.isTitleError = false;
      this.isBodyError = false;
      this.isUserError = false;
      this.clearPopupData();
    },
    addPost() {
      if (!this.title) {
        this.isTitleError = true;
      }
      if (!this.body) {
        this.isBodyError = true;
      }
      if (!this.user) {
        this.isUserError = true;
      }
      if (!this.isTitleError && !this.isBodyError && !this.isUserError) {
        this.$emit("addPost", {
          title: this.title,
          body: this.body,
          userId: this.user,
        });
        this.clearPopupData();
      }
    },
    isButtonDisabledCheck() {
      if (this.title && this.body && this.user) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    clearPopupData() {
      this.title = "";
      this.body = "";
      this.user = "";
    },
  },
  watch: {
    title() {
      this.isTitleError = false;
      this.isButtonDisabledCheck();
    },
    body() {
      this.isBodyError = false;
      this.isButtonDisabledCheck();
    },
    user() {
      this.isUserError = false;
      this.isButtonDisabledCheck();
    },
  },
});
