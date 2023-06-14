<template>
  <div class="posts">
    <header class="posts_header">
      <h2 class="posts_title">Manage posts</h2>
      <button class="posts_add_button" @click="openPopup">Add post</button>
    </header>
    <main>
      <table class="posts_table">
        <tr>
          <th>post title</th>
          <th>user name</th>
        </tr>
        <transition-group name="transition">
          <tr v-for="item in postsData" :key="item.title">
            <td>{{ item.title }}</td>
            <td>{{ getUserNameById(item.userId) }}</td>
          </tr>
        </transition-group>
      </table>
    </main>
  </div>
  <transition name="transition">
    <PostsPopup
      v-show="isPopupOpen"
      @closePopup="closePopup"
      @addPost="addPost"
      :userNamesData="userNamesData"
    />
  </transition>
</template>

<script src="./PostsPage.ts" lang="ts"></script>

<style lang="scss">
@import "../styles/style.scss";
</style>
