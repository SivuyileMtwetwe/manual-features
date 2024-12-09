<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header">
          <h2>Modal Title</h2>
        </slot>
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      <div class="modal-body">
        <slot>
          <p>Default Modal Content</p>
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <button class="btn btn-primary" @click="closeModal">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
