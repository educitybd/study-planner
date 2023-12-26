<script setup lang="ts">
import { ref } from 'vue';
import type { productPerformanceType } from '@/types/dashboard/index';
import { EditIcon, TrashIcon } from 'vue-tabler-icons';
import Dialog from '@/components/shared/Dialog.vue';

let dialogStatus: any = ref(false);
let dialogResponse: any = ref({});
const productPerformance: productPerformanceType[] = [
  {
    id: 1,
    name: 'Meet with my professor',
    post: '10 minutes remaining',
    pname: '10 April, 2023',
    status: 'Low',
    statuscolor: 'primary',
    budget: '10:00 AM'
  },
  {
    id: 2,
    name: 'Meet with my professor',
    post: '10 minutes overdue',
    pname: '10 June, 2023',
    status: 'Normal',
    statuscolor: 'secondary',
    budget: '07:00 AM'
  },
  {
    id: 3,
    name: 'Meet with my professor',
    post: '10 minutes remaining',
    pname: '10 July, 2023',
    status: 'High',
    statuscolor: 'error',
    budget: '12:00 AM'
  }
];
const items: any = [
  { title: 'Edit', icon: EditIcon },
  { title: 'Delete', icon: TrashIcon }
];

function updateDialogStatus(data: any) {
  console.log(data);
  dialogStatus.value = false;
  productPerformance.push(data);
}

function openDialog() {
  dialogStatus.value = true;
}
</script>
<template>
  <Dialog @dialogClosed="updateDialogStatus" v-if="dialogStatus" :dialogStatus="dialogStatus" title="Add New Task" />
  <v-card elevation="10" class="month-table" variant="elevated">
    <v-card-item class="pa-6">
      <v-card-title class="text-h5 pt-sm-2 pb-7"
        >My Tasks/ ToDo
        {{ dialogResponse }}
        <v-btn @click="openDialog" class="float-end" icon="mdi-plus" color="primary"></v-btn>
      </v-card-title>

      <v-table>
        <thead>
          <tr>
            <th class="text-subtitle-1 font-weight-bold"></th>
            <th class="text-subtitle-1 font-weight-bold">Task Details</th>
            <th class="text-subtitle-1 font-weight-bold">Time</th>
            <th class="text-subtitle-1 font-weight-bold">Priority</th>
            <th class="text-subtitle-1 font-weight-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productPerformance" :key="item.name" class="month-item">
            <td>
              <v-checkbox color="primary"></v-checkbox>
            </td>
            <td>
              <div class="">
                <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                <div class="text-13 mt-1 text-muted">{{ item.post }}</div>
              </div>
            </td>
            <td>
              <div class="">
                <h6 class="text-h5 font-weight-bold">{{ item.budget }}</h6>
                <div class="text-13 mt-1 text-muted">{{ item.pname }}</div>
              </div>
            </td>
            <td>
              <v-chip :class="'text-body-1 bg-' + item.statuscolor" color="white" size="small">{{ item.status }}</v-chip>
            </td>
            <td>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn elevation="0" icon="mdi-dots-vertical" v-bind="props"></v-btn>
                </template>
                <!-- 
                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list> -->
                <v-list density="compact">
                  <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                    <v-list-item-title class="text-14">
                      <v-avatar rounded="0">
                        <v-icon :icon="item.icon"></v-icon>
                      </v-avatar>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
</template>
