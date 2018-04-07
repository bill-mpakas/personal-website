<template>
    <div class="main-content">
      <h2 class="contact-title">
        Contact Me
      </h2>
      <div id="wrapper">
        <form action='' netlify-honeypot="bot-field" class='form' method="POST" netlify>
          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field"></label>
          </p>
          <p class='field required half'>
            <label class='label required' for='name'></label>
            <input class='text-input' placeholder="Name" id='name' name='name' required type='text'>
          </p>
          <p class='field required half'>
            <label class='label' for='email'></label>
            <input class='text-input' placeholder="Email" id='email' name='email' required type='email'>
          </p>
          <p class='field'>
            <label class='label' for='message'></label>
            <textarea class='textarea' placeholder="Message" cols='50' id='message' name='message' required rows='4'></textarea>
          </p>
          <p class='field'>
            <input class='button' type='submit' value='Send message'>
          </p>
        </form>
      </div>
    </div>
</template>

<style lang="sass" scoped>
      
$bg: white
$text: black

$label: rgba(black,.7)
$border: rgba(black,.3)

$active: black
$focus: black
$error: red
  
.main-content 
  display: grid
  grid-template-rows: 10% 90%
    

.contact-title 
  align-self: center;
  justify-self: center;

.hidden 
  visibility: hidden


%block
  padding: 1em 1.5em
  appearance: none
  outline: none
  line-height: normal
  border: 1px solid transparent
  border-radius: 0

%input
  @extend %block
  font: inherit
  line-height: normal
  width: 100%
  box-sizing: border-box
  display: block

  padding-left: 0

  border-bottom-color: $border
  background: transparent
  outline: none

  color: $text

  &:placeholder
    color: $label

  &:-webkit-autofill
    box-shadow: 0 0 0px 1000px $bg inset
    border-top-color: $bg
    border-left-color: $bg
    border-right-color: $bg
  
  &.error, .error &
    border-color: transparent transparent $error transparent
  
  .form:not(.has-floated-label) &
    &:active, &:focus
      border-color: transparent transparent $text transparent

%floated
  @extend %block
  
  position: absolute
  z-index: 10
  pointer-events: none
  padding-left: 0
  
%floated-label
  @extend %floated
  
  top: 0
  left: 0
  color: $label
  transition: color .3s
  
  
  .active &
    font-size: .75em
    line-height: 1
    font-weight: 600
    text-transform: uppercase
    padding: 0
    color: $label
    background: $bg

  .focus &
    color: $text

  // .focus:not(.active) &
  //   transition: font .2s ease
  
.form.has-floated-label .field:after
  content: ''
  position: absolute
  bottom: 0
  left: 0
  width: 0%
  border-bottom: 1px solid $active
  transition: width .3s cubic-bezier(0.455, 0.030, 0.515, 0.955)

.form.has-floated-label .field.focus:after
  width: 100%


%button
  @extend %block
  
  font: inherit
  line-height: normal
  cursor: pointer

  background-color: #2B9cf2
  color: white
  text-transform: uppercase
  text-align: center
  letter-spacing: #{(2/14)}em

  &:hover, &:focus, &:active
    color: white
    background: #288EDC
  

  &:active
    position: relative
    top: 1px
    left: 1px

.form

  max-width: 50em
  margin: 0 auto
  padding: 1em 2em
  box-sizing: border-box
  overflow: hidden
  
  .field
    position: relative
    width: 100%
    margin-bottom: 1.5em
    float: left
    &.half
      @media screen and (min-width: 40em)
        width: calc(50% - 2em)
        margin-right: 2em
        + .half
          margin:
            left: 2em
            right: 0
    &:last-child
      float: right
      width: auto

  .text-input
    @extend %input

  .textarea
    @extend %input
    max-width: 100%
    
  .button
    @extend %button
    
  .label
    @extend %floated-label

svg
  path
    fill: black
  




  
</style>




