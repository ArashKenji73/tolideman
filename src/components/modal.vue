<template>
  <transition name="modal-fade">  
  <div class="custom-modal-backdrop" @click.self="close">
    <div class="custom-modal">
      <div class="modal-header">
        <slot name="header" class="header-text"></slot>
        <button type="button" @click="close"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
          <slot name="body"></slot>
      </div>
      <div class="modal-footer">
          <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
  .custom-modal-backdrop {
    font-family: $main-font;  
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color: #000000, $alpha: 0.8);
    z-index: 999;
    .custom-modal{
        width: 90%;
        max-height: 90%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        z-index: 9999;
        background: $lightWhiteBG;
        border-radius: 10px;
        .modal-header{
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 2px solid #dddddd;
            .header-text{
                flex-grow: 1;
            }
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 0px;
                border-radius: 100%;
                width: 30px;
                height: 30px;
                background: #E74C3C;
                color: #fff;
                border-radius: 100%;
            }
        }
        .modal-footer{
            span{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;    
                    a{
                        text-align: center;
                        flex-grow: 1;
                        padding: 10px;
                        color: #fff;
                    }
            }

        }
    }
  }
    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease
    }
</style>