export const TAB = {
  name: 'members',
  tabs: [
    {
      label: 'Overview',
      name: 'index',
    },
    {
      label: '學青',
      name: 'young',
    },
    {
      label: '社青',
      name: 'society',
    },
    {
      label: '通訊錄',
      name: 'directory',
    },
  ],
}

export const MEMBER_TABLE_COLUMNS = {
  OVERVIEW: [
    {
      text: '編號',
      value: 'id',
      align: 'start',
      width: '8%',
    },
    {
      text: '姓名',
      value: 'name',
      align: 'start',
      width: '10%',
    },
    {
      text: '信箱',
      value: 'email',
      align: 'start',
      width: '35%',
    },
    {
      text: '參與事工',
      value: 'ministries',
      align: 'start',
      slot: 'ministries',
      width: '20%',
    },
    {
      text: '手機號碼',
      value: 'mobile',
      align: 'end',
      width: '20%',
    },
  ],
  YOUNG: [
    {
      text: '編號',
      value: 'id',
      align: 'start',
      width: '8%',
    },
    {
      text: '姓名',
      value: 'name',
      align: 'start',
      width: '10%',
    },
    {
      text: '狀態',
      value: 'status',
      align: 'start',
      width: '10%',
    },
    {
      text: '服事',
      value: 'services',
      align: 'start',
      slot: 'services',
      width: '35%',
    },
    {
      text: '參與事工',
      value: 'ministries',
      slot: 'ministries',
      align: 'start',
      width: '20%',
    },
    {
      text: '能安排服事的時間',
      value: 'availableTime',
      slot: 'availableTime',
      align: 'end',
    },
  ],
}
