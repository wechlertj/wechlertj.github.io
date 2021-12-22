module.exports = {
  grundlagen: [
    'einleitung',
    {
      type:'category',
      label:'Installation',
      link:{
        type:'doc',
        id:'installation'
      },
      items: [
        'installation-miktex',
        'installation-texlive',
        'installation-mactex',
        'installation-texmaker-texstudio',
        'installation-vscode',
      ]
    },
    'dateistruktur',
    'text',
    'mathematik',
    {
      type: 'category',
      label: 'Umgebungen',
      link: {
        type:'doc',
        id:'umgebungen'
      },
      items: [
        'figure',
        'table',
        'equations',
        'listings',
      ]
    },
    'bibliography',
    'referenz',
    'verzeichnisse',
    'layout',
    'correct_typography',
    'wissenschaftlich',
  ],
};