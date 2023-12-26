<script setup lang="ts">
const emit = defineEmits(['dialogClosed']);
defineProps({
  title: String,
  dialog: Boolean,
  isOpen: Boolean,
  dialogStatus: Boolean
});
let formData = {
  id: 1,
  title: 'testl'
};
console.log('hi');
function save() {
  emit('dialogClosed', formData);
}
function close() {
  emit('dialogClosed', formData);
}
</script>
<template>
  <v-dialog v-model="dialogStatus" width="auto">
    <v-card :title="title">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="formData.title" label="Task Title" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="close()"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
