import { HUBS } from "../constants.ts";

function validateEmail(email: string): string {
  return email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) !== null
    ? ""
    : "Email is invalid.";
}

function validateUsername(username: string): string {
  return username.match(/^\w{4,30}$/) !== null
    ? ""
    : username.length > 30
      ? "Username must be at most 30 characters long."
      : username.length < 4
        ? "Username must be at least 4 characters long."
        : "Username must only contain alphanumerical characters or underscores.";
}

function validatePassword(password: string): string {
  return password.match(/^.{8,18}$/) !== null
    ? ""
    : password.length > 18
      ? "Password must be at most 18 characters long." // this is to prevent error in generating password hash
      : "Password must be at least 8 characters long.";
}

function validateUserNickname(nickname: string): string {
  return nickname.match(/^.{,50}$/) !== null
    ? ""
    : "Nickname must be at most 50 characters long.";
}

function validateUserAbout(about: string): string {
  return about.match(/^.{,250}$/) !== null
    ? ""
    : "About section must be at most 250 characters long.";
}

function validatePostTitle(postTitle: string): string {
  return postTitle.match(/^.{8,150}$/) !== null
    ? ""
    : postTitle.length > 150
      ? "Title must be at most 100 characters long."
      : "Title must be at least 8 characters long.";
}

function validatePostContent(postContent: string): string {
  return postContent.match(/^.{20,}$/) !== null
    ? ""
    : "Content must be at most 20 characters long.";
}

function validateTopic(topic: string): string {
  return topic.match(/^[a-z-]{3,39}[a-z]$/) !== null
    ? ""
    : topic.length > 40
      ? "Topic name must be at most 40 characters long."
      : topic.length < 4
        ? "Topic name must be at least 4 characters long."
        : "Topic name must only contain lowercase letters separated by dashes.";
}

function validateHub(hub: string): string {
  return HUBS.filter((item) => item.key === hub).length
    ? ""
    : "Hub does not exist.";
}

function validateTag(tag: string): string {
  return tag.match(/^[a-z-]{3,39}[a-z]$/) !== null
    ? ""
    : tag.length > 40
      ? "Tag must be at most 40 characters long."
      : tag.length < 4
        ? "Tag must be at least 4 characters long."
        : "Tag must only contain lowercase letters separated by dashes.";
}

export default {
  validateEmail,
  validateUsername,
  validatePassword,
  validateUserNickname,
  validateUserAbout,
  validatePostTitle,
  validatePostContent,
  validateTopic,
  validateHub,
  validateTag,
};
