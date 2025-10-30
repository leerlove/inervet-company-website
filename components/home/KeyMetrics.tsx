import metrics from '@/data/metrics.json'

export default function KeyMetrics() {
  const metricsData = [
    {
      value: `${metrics.consultations.toLocaleString()}+`,
      label: '누적 상담 건수',
    },
    {
      value: `${metrics.satisfaction}%`,
      label: '고객 만족도',
    },
    {
      value: `${metrics.responseTime}분`,
      label: '평균 상담 연결 시간',
    },
    {
      value: metrics.availability,
      label: '연중무휴 운영',
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsData.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-900 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
