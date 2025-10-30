import testimonialsData from '@/data/testimonials.json'
import metrics from '@/data/metrics.json'

export default function Testimonials() {
  const { testimonials } = testimonialsData

  const colors = [
    { bg: 'bg-blue-100', text: 'text-primary-900' },
    { bg: 'bg-purple-100', text: 'text-purple-900' },
    { bg: 'bg-green-100', text: 'text-green-900' },
  ]

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {metrics.consultations.toLocaleString()}건의 상담으로 검증된 신뢰
          </h2>
          <p className="text-lg text-gray-600">실제 사용자들의 생생한 후기</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const color = colors[index % colors.length]

            return (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${color.bg} rounded-full flex items-center justify-center`}
                  >
                    <span className={`${color.text} font-semibold`}>{testimonial.author.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author.name} 님</p>
                    <p className="text-sm text-gray-500">{testimonial.author.pet}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
