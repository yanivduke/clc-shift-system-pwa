export const TAB = {
  name: 'members',
  tabs: [
    {
      label: 'Overview',
      name: 'index',
    },
    {
      label: '學生',
      name: 'young',
    },
    {
      label: '社會人士',
      name: 'society',
    },
  ],
}

export const MEMBER_TABLE_COLUMNS = {
  OVERVIEW: [
    { text: 'ID', value: 'id' },
    {
      text: 'Name',
      align: 'start',
      // sortable: false,
      value: 'name',
    },
    {
      text: 'Email',
      align: 'start',
      // sortable: false,
      value: 'email',
    },
    {
      text: 'joinDate',
      align: 'start',
      value: 'joinDate',
    },
    {
      text: 'service',
      align: 'start',
      value: 'service',
    },
    {
      text: 'ministry',
      // align: 'start',
      value: 'ministry',
    },
  ],
}
