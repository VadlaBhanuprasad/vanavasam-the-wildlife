import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const sightingsData = [
  { time: '6AM', elephants: 12, peacocks: 35, deer: 45, butterflies: 180 },
  { time: '9AM', elephants: 8, peacocks: 52, deer: 32, butterflies: 250 },
  { time: '12PM', elephants: 3, peacocks: 28, deer: 15, butterflies: 120 },
  { time: '3PM', elephants: 5, peacocks: 42, deer: 22, butterflies: 190 },
  { time: '6PM', elephants: 15, peacocks: 68, deer: 55, butterflies: 280 },
  { time: '9PM', elephants: 2, peacocks: 12, deer: 8, butterflies: 40 },
];

const weeklyTrends = [
  { day: 'Mon', sightings: 145 },
  { day: 'Tue', sightings: 162 },
  { day: 'Wed', sightings: 158 },
  { day: 'Thu', sightings: 171 },
  { day: 'Fri', sightings: 185 },
  { day: 'Sat', sightings: 192 },
  { day: 'Sun', sightings: 178 },
];

const animalStats = [
  { name: 'Elephants', count: 156, icon: '🐘', trend: '+12%', color: 'hsl(180, 100%, 45%)' },
  { name: 'Peacocks', count: 340, icon: '🦚', trend: '+18%', color: 'hsl(200, 100%, 50%)' },
  { name: 'Monkeys', count: 520, icon: '🐒', trend: '+22%', color: 'hsl(30, 80%, 50%)' },
  { name: 'Deer Species', count: 890, icon: '🦌', trend: '+15%', color: 'hsl(150, 100%, 45%)' },
];

const WildlifeActivity = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-2 block neon-text">
            Live Data
          </span>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Wildlife <span className="text-primary">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time tracking of animal sightings and optimal viewing times based on historical data.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {animalStats.map((animal, index) => (
            <motion.div
              key={animal.name}
              className="glass-neon p-4 md:p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl md:text-3xl">{animal.icon}</span>
                <span className="text-xs text-neon-green">{animal.trend}</span>
              </div>
              <p className="text-2xl md:text-3xl font-display" style={{ color: animal.color }}>
                {animal.count}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{animal.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Sightings by Time */}
          <motion.div
            className="glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-display text-xl mb-6">Best Viewing Times</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sightingsData}>
                  <defs>
                    <linearGradient id="elephantGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(180, 100%, 45%)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(180, 100%, 45%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="peacockGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(200, 100%, 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(220, 20%, 7%)',
                      border: '1px solid hsl(180, 100%, 45%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="elephants"
                    stroke="hsl(180, 100%, 45%)"
                    fill="url(#elephantGradient)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="peacocks"
                    stroke="hsl(200, 100%, 50%)"
                    fill="url(#peacockGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Weekly Trends */}
          <motion.div
            className="glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-display text-xl mb-6">Weekly Sighting Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyTrends}>
                  <XAxis dataKey="day" stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(220, 10%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(220, 20%, 7%)',
                      border: '1px solid hsl(180, 100%, 45%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar
                    dataKey="sightings"
                    fill="hsl(280, 100%, 60%)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WildlifeActivity;
