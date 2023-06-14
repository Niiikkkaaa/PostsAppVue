<template>
  <div class="popup">
    <div class="popup_header">
      <h3 class="popup_title">Add post</h3>
      <button class="popup_close_button" @click="closePopup"></button>
    </div>
    <div class="popup_container">
      <div class="popup_input_container">
        <label class="popup_label" for="title">Title</label>
        <input
          id="title"
          type="text"
          class="popup_input"
          v-bind:class="{ error: isTitleError }"
          placeholder="Enter title..."
          v-model="title"
        />
      </div>
      <div class="popup_input_container">
        <label class="popup_label" for="body">Body</label>
        <textarea
          id="body"
          class="popup_input popup_textarea"
          v-bind:class="{ error: isBodyError }"
          placeholder="Enter body..."
          v-model="body"
        ></textarea>
      </div>
      <div class="popup_input_container">
        <label class="popup_label" for="user">User</label>
        <select
          id="user"
          type="selector"
          class="popup_input popup_selector"
          v-bind:class="{ error: isUserError }"
          v-model="user"
        >
          <option value="" selected disabled hidden>Choose user</option>
          <option v-for="item in userNamesData" :key="item.id" :value="item.id">
            <span class="popup_selector_item">{{ item.name }}</span>
          </option>
        </select>
      </div>
    </div>
    <button
      class="posts_add_button popup_add_button"
      @click="addPost"
      :disabled="!!isDisabled"
    >
      Add post
    </button>
  </div>
</template>

<script src="./PostsPopup.ts" lang="ts" />
