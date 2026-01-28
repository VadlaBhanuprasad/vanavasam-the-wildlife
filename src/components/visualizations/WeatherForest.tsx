import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Thermometer, TreePine, Leaf, Sun, Moon } from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const forestHealth = [
  { name: 'Canopy Density', value: 92, fill: 'hsl(150, 100%, 45%)' },
];

const biodiversityData = [
  { name: 'Flora', value: 35, color: 'hsl(150, 100%, 45%)' },
  { name: 'Fauna', value: 25, color: 'hsl(25, 100%, 55%)' },
  { name: 'Insects', value: 20, color: 'hsl(280, 100%, 60%)' },
  { name: 'Birds', value: 20, color: 'hsl(180, 100%, 45%)' },
];

const currentWeather = {
  temperature: 24,
  humidity: 78,
  windSpeed: 12,
  condition: 'Partly Cloudy',
  sunrise: '6:12 AM',
  sunset: '6:45 PM',
};

const dailyForecast = [
  { day: 'Today', high: 28, low: 19, icon: '⛅' },
  { day: 'Tue', high: 26, low: 18, icon: '🌧️' },
  { day: 'Wed', high: 24, low: 17, icon: '🌧️' },
  { day: 'Thu', high: 27, low: 19, icon: '☀️' },
  { day: 'Fri', high: 29, low: 20, icon: '☀️' },
];

const WeatherForest = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-green text-sm tracking-widest uppercase mb-2 block">
            Environmental Data
          </span>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Weather & <span className="text-neon-green">Forest Health</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Live environmental monitoring for optimal experience planning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Current Weather */}
          <motion.div
            className="lg:col-span-2 glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-display text-xl mb-6 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-primary" />
              Current Conditions
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Main Weather */}
              <div className="flex items-center gap-6">
                <div className="text-6xl md:text-7xl font-display text-primary neon-text">
                  {currentWeather.temperature}°
                </div>
                <div>
                  <p className="text-lg text-foreground">{currentWeather.condition}</p>
                  <p className="text-sm text-muted-foreground">Western Ghats</p>
                </div>
              </div>

              {/* Weather Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Droplets className="w-5 h-5 text-water-stream" />
                  <div>
                    <p className="text-sm text-muted-foreground">Humidity</p>
                    <p className="text-lg font-display">{currentWeather.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Wind className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Wind</p>
                    <p className="text-lg font-display">{currentWeather.windSpeed} km/h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Sun className="w-5 h-5 text-temple-gold" />
                  <div>
                    <p className="text-sm text-muted-foreground">Sunrise</p>
                    <p className="text-lg font-display">{currentWeather.sunrise}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Moon className="w-5 h-5 text-neon-purple" />
                  <div>
                    <p className="text-sm text-muted-foreground">Sunset</p>
                    <p className="text-lg font-display">{currentWeather.sunset}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Forecast */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">5-Day Forecast</p>
              <div className="flex justify-between gap-2">
                {dailyForecast.map((day, index) => (
                  <motion.div
                    key={day.day}
                    className="flex-1 text-center p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-xs text-muted-foreground">{day.day}</p>
                    <p className="text-2xl my-2">{day.icon}</p>
                    <p className="text-sm">
                      <span className="text-foreground">{day.high}°</span>
                      <span className="text-muted-foreground"> / {day.low}°</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Forest Health */}
          <motion.div
            className="glass-neon p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-display text-xl mb-4 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-neon-green" />
              Forest Health
            </h3>

            {/* Canopy Density */}
            <div className="h-40 relative">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="100%"
                  data={forestHealth}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    background={{ fill: 'hsl(220, 15%, 12%)' }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center mt-8">
                  <p className="text-3xl font-display text-neon-green">92%</p>
                  <p className="text-xs text-muted-foreground">Canopy Density</p>
                </div>
              </div>
            </div>

            {/* Biodiversity */}
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-3">Biodiversity Index</p>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={biodiversityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {biodiversityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {biodiversityData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeatherForest;
