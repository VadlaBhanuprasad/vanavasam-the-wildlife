import { motion } from 'framer-motion';
import { Leaf, TreePine, Recycle, Footprints, Droplets, Wind } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const carbonData = [
  { month: 'Jan', saved: 120 },
  { month: 'Feb', saved: 145 },
  { month: 'Mar', saved: 180 },
  { month: 'Apr', saved: 210 },
  { month: 'May', saved: 250 },
  { month: 'Jun', saved: 295 },
];

const conservationStats = [
  { label: 'Trees Planted', value: 12450, icon: TreePine, color: 'hsl(150, 100%, 45%)' },
  { label: 'CO₂ Offset (tons)', value: 890, icon: Wind, color: 'hsl(180, 100%, 45%)' },
  { label: 'Water Saved (L)', value: 45000, icon: Droplets, color: 'hsl(195, 70%, 50%)' },
  { label: 'Waste Recycled (kg)', value: 3200, icon: Recycle, color: 'hsl(280, 100%, 60%)' },
];

const visitorImpact = [
  { activity: 'Eco-Lodge', carbon: 2.5, traditional: 15 },
  { activity: 'Transport', carbon: 3.2, traditional: 25 },
  { activity: 'Food', carbon: 1.8, traditional: 8 },
  { activity: 'Activities', carbon: 0.5, traditional: 5 },
];

const EcoImpact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-forest-deep/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green text-sm tracking-widest uppercase mb-2 block">
            Sustainability
          </span>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Your Eco <span className="text-neon-green">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every visit contributes to forest conservation. Track your positive environmental impact.
          </p>
        </motion.div>

        {/* Conservation Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {conservationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-neon p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${stat.color}20` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <motion.p 
                className="text-3xl md:text-4xl font-display mb-1"
                style={{ color: stat.color }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value.toLocaleString()}
              </motion.p>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Carbon Offset Trend */}
          <motion.div
            className="glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-display text-xl mb-6 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-neon-green" />
              Carbon Offset Growth
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={carbonData}>
                  <defs>
                    <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(150, 100%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(150, 100%, 45%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(220, 20%, 7%)',
                      border: '1px solid hsl(150, 100%, 45%)',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`${value} tons`, 'CO₂ Saved']}
                  />
                  <Line
                    type="monotone"
                    dataKey="saved"
                    stroke="hsl(150, 100%, 45%)"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(150, 100%, 45%)', strokeWidth: 0, r: 4 }}
                    activeDot={{ r: 6, fill: 'hsl(150, 100%, 45%)', stroke: 'hsl(220, 20%, 4%)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Visitor Carbon Footprint Comparison */}
          <motion.div
            className="glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-display text-xl mb-6 flex items-center gap-2">
              <Footprints className="w-5 h-5 text-primary" />
              Carbon Footprint Comparison
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Eco-tourism vs Traditional tourism (kg CO₂/day)
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitorImpact} layout="vertical">
                  <XAxis type="number" stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <YAxis dataKey="activity" type="category" stroke="hsl(220, 10%, 55%)" fontSize={12} width={80} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(220, 20%, 7%)',
                      border: '1px solid hsl(180, 100%, 45%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="carbon" name="Eco Tourism" fill="hsl(150, 100%, 45%)" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="traditional" name="Traditional" fill="hsl(0, 60%, 45%)" radius={[0, 4, 4, 0]} opacity={0.6} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-neon-green" />
                <span className="text-muted-foreground">Eco Tourism</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-destructive/60" />
                <span className="text-muted-foreground">Traditional</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pledge Section */}
        <motion.div
          className="mt-12 glass-neon p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Leaf className="w-12 h-12 text-neon-green mx-auto mb-4" />
          <h3 className="text-display text-2xl mb-2">Our Eco Pledge</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            For every guest, we plant 5 trees and offset 100% of your visit's carbon footprint 
            through verified conservation projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 rounded-full bg-neon-green/10 text-neon-green text-sm">
              ✓ Carbon Neutral
            </div>
            <div className="px-4 py-2 rounded-full bg-water-stream/10 text-water-stream text-sm">
              ✓ Zero Plastic
            </div>
            <div className="px-4 py-2 rounded-full bg-temple-gold/10 text-temple-gold text-sm">
              ✓ Local Community
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcoImpact;
