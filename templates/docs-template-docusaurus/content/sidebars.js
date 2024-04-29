module.exports = {
  mySidebar: [
    'introduction',
    'architecture',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'install/install1',
        'install/install2',
      ],
    },
    {
      type: 'category',
      label: 'Upgrades',
      items:[
        'upgrades/manual_upgrade',
        'upgrades/automatic_upgrade',
      ],
    },
   'backup_restore',
   'known_issues'
  ],
};
