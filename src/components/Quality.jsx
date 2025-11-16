import React from 'react'

export default function Quality() {
  return (
    <section id="quality" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {[{
          title: 'Glide-Optimized Surface',
          desc: 'Micro-weave cloth calibrated for fast flicks and micro-adjustments.'
        },{
          title: 'Non-Slip Rubber Base',
          desc: 'Dense, grippy rubber holds firm during intense sessions.'
        },{
          title: 'Anti-Fray Stitched Edges',
          desc: 'Durable stitching prevents edge wear and curling.'
        }].map((f, i) => (
          <div key={i} className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">{f.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
