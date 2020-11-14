<template>
  <div>
    <el-dialog width="500px" :title="title" :visible.sync="showDialog">
      <div>
        {{ content }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">{{ $t('header.cancel') }}</el-button>
        <el-button type="primary" @click="handleConfirm">
          {{ $t('header.confirm') }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    showDialog: Boolean,
    content: String,
  },
  methods: {
    handleCancel() {
      this.$emit('cancel', false)
    },
    handleConfirm() {
      this.$emit('confirm', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
