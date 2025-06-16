<<<<<<< HEAD
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// Rendement par culture - bar chart
const ctxRendement = document.getElementById('rendementChart').getContext('2d');
new Chart(ctxRendement, {
  type: 'bar',
  data: {
    labels: ['Blé', 'Maïs', 'Tomates', 'Riz'],
    datasets: [{
      label: 'q/ha',
      data: [50, 60, 70, 80],
      backgroundColor: createGradient(ctxRendement, '#81c784', '#c8e6c9'),
      borderColor: '#2e7d32',
      borderWidth: 1,
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Rendement par Culture',
        font: { size: 18, weight: 'bold' }
      },
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } }
    }
  }
});

// Comparaison saisonnière - smooth line chart
const ctxSaison = document.getElementById('saisonChart').getContext('2d');
new Chart(ctxSaison, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [{
      label: 'Rendement (q/ha)',
      data: [20, 35, 50, 65, 80, 70, 55, 60, 75, 90, 70, 40],
      fill: true,
      backgroundColor: createGradient(ctxSaison, 'rgba(76,175,80,0.3)', 'rgba(255,255,255,0)'),
      borderColor: '#388e3c',
      tension: 0.5,
      borderWidth: 4,
      pointRadius: 5,
      pointBackgroundColor: '#66bb6a'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comparaison Saisonnière',
        font: { size: 18, weight: 'bold' }
      },
      legend: { labels: { font: { size: 14 } } }
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } }
    }
  }
});

// Analyse par parcelle - doughnut chart
const ctxParcelle = document.getElementById('parcelleChart').getContext('2d');
new Chart(ctxParcelle, {
  type: 'doughnut',
  data: {
    labels: ['Parcelle A', 'Parcelle B', 'Parcelle C'],
    datasets: [{
      label: 'Surface (%)',
      data: [40, 30, 30],
      backgroundColor: ['#66bb6a', '#81c784', '#a5d6a7'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Analyse par Parcelle',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        position: 'bottom',
        labels: { font: { size: 14 } }
      }
    }
  }
});

// Coûts vs Bénéfices - grouped bar chart
const ctxCout = document.getElementById('coutBeneficeChart').getContext('2d');
new Chart(ctxCout, {
  type: 'bar',
  data: {
    labels: ['Blé', 'Maïs', 'Tomates', 'Riz'],
    datasets: [
      {
        label: 'Coûts',
        data: [100000, 120000, 150000, 130000],
        backgroundColor: '#e57373',
        borderRadius: 6
      },
      {
        label: 'Bénéfices',
        data: [150000, 180000, 210000, 190000],
        backgroundColor: '#81c784',
        borderRadius: 6
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Coûts vs Bénéfices',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        labels: { font: { size: 14 } }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: value => value.toLocaleString('fr-FR') + ' €' }
      },
      x: { grid: { display: false } }
    }
  }
});
=======
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// Rendement par culture - bar chart
const ctxRendement = document.getElementById('rendementChart').getContext('2d');
new Chart(ctxRendement, {
  type: 'bar',
  data: {
    labels: ['Blé', 'Maïs', 'Tomates', 'Riz'],
    datasets: [{
      label: 'q/ha',
      data: [50, 60, 70, 80],
      backgroundColor: createGradient(ctxRendement, '#81c784', '#c8e6c9'),
      borderColor: '#2e7d32',
      borderWidth: 1,
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Rendement par Culture',
        font: { size: 18, weight: 'bold' }
      },
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } }
    }
  }
});

// Comparaison saisonnière - smooth line chart
const ctxSaison = document.getElementById('saisonChart').getContext('2d');
new Chart(ctxSaison, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [{
      label: 'Rendement (q/ha)',
      data: [20, 35, 50, 65, 80, 70, 55, 60, 75, 90, 70, 40],
      fill: true,
      backgroundColor: createGradient(ctxSaison, 'rgba(76,175,80,0.3)', 'rgba(255,255,255,0)'),
      borderColor: '#388e3c',
      tension: 0.5,
      borderWidth: 4,
      pointRadius: 5,
      pointBackgroundColor: '#66bb6a'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comparaison Saisonnière',
        font: { size: 18, weight: 'bold' }
      },
      legend: { labels: { font: { size: 14 } } }
    },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } }
    }
  }
});

// Analyse par parcelle - doughnut chart
const ctxParcelle = document.getElementById('parcelleChart').getContext('2d');
new Chart(ctxParcelle, {
  type: 'doughnut',
  data: {
    labels: ['Parcelle A', 'Parcelle B', 'Parcelle C'],
    datasets: [{
      label: 'Surface (%)',
      data: [40, 30, 30],
      backgroundColor: ['#66bb6a', '#81c784', '#a5d6a7'],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Analyse par Parcelle',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        position: 'bottom',
        labels: { font: { size: 14 } }
      }
    }
  }
});

// Coûts vs Bénéfices - grouped bar chart
const ctxCout = document.getElementById('coutBeneficeChart').getContext('2d');
new Chart(ctxCout, {
  type: 'bar',
  data: {
    labels: ['Blé', 'Maïs', 'Tomates', 'Riz'],
    datasets: [
      {
        label: 'Coûts',
        data: [100000, 120000, 150000, 130000],
        backgroundColor: '#e57373',
        borderRadius: 6
      },
      {
        label: 'Bénéfices',
        data: [150000, 180000, 210000, 190000],
        backgroundColor: '#81c784',
        borderRadius: 6
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Coûts vs Bénéfices',
        font: { size: 18, weight: 'bold' }
      },
      legend: {
        labels: { font: { size: 14 } }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: value => value.toLocaleString('fr-FR') + ' €' }
      },
      x: { grid: { display: false } }
    }
  }
});
>>>>>>> 1b1d50e (Réorganisation des fichiers et ajout des nouvelles pages/statistiques)
