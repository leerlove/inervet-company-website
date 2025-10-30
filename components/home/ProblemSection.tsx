export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '밤늦게 아이가 아플 때',
      description:
        '병원이 문을 닫았는데 우리 아이가 갑자기 토하거나 경련을 일으킨다면? 지금 당장 응급실로 가야 할지 판단이 서지 않을 때',
      bgColor: 'bg-blue-100',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '증상이 애매할 때',
      description:
        '병원에 가야 할 정도인지, 집에서 지켜봐도 될지 확신이 서지 않을 때. 괜히 병원 갔다가 비용만 쓸까 고민될 때',
      bgColor: 'bg-purple-100',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: '멀리 있을 때',
      description:
        '출장이나 여행 중인데 아이가 밥을 안 먹는다는 연락을 받았을 때. 어디서든 즉시 전문가의 조언이 필요할 때',
      bgColor: 'bg-green-100',
    },
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            이런 고민, 해보신 적 있으신가요?
          </h2>
          <p className="text-lg text-gray-600">밤늦게 혼자 걱정하던 순간들, INERVET이 함께합니다</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="card card-hover">
              <div className={`w-14 h-14 ${problem.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
