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
    {
      text: 'ID',
      value: 'id',
      align: 'start',
      // width: '10%',
    },
    {
      text: 'Name',
      value: 'name',
      align: 'start',
      // width: '15%',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'start',
      width: '15%',
    },
    {
      text: 'Phone number',
      value: 'mobile',
      align: 'end',
      width: '10%',
    },
    {
      text: 'Services',
      value: 'services',
      align: 'start',
      slot: 'services',
      width: '40%',
    },
    {
      text: 'Ministries',
      value: 'ministries',
      align: 'end',
      slot: 'ministries',
      width: '20%',
    },
  ],
}
