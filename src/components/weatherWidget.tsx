import React from 'react';
import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';
import { useWeather } from '../hooks/useWeather';

interface WeatherWidgetProps {
  apiKey: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ apiKey }) => {
  const { weather, loading, error } = useWeather(apiKey);

  if (loading) return null;
  if (error) return null;
  if (!weather) return null;

  const getWeatherIcon = () => {
    const iconCode = weather.icon;
    if (iconCode.includes('01')) return <Sun className="w-6 h-6 text-yellow-400" />;
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) 
      return <Cloud className="w-6 h-6 text-gray-400" />;
    if (iconCode.includes('09') || iconCode.includes('10')) 
      return <CloudRain className="w-6 h-6 text-blue-400" />;
    if (iconCode.includes('13')) 
      return <Snowflake className="w-6 h-6 text-blue-300" />;
    return <Sun className="w-6 h-6 text-yellow-400" />;
  };

  return (
    <div className="fixed top-20 right-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-2">
        {getWeatherIcon()}
        <div className="text-sm">
          <p className="font-medium">{weather.temp}°C</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{weather.location}</p>
        </div>
      </div>
    </div>
  );
};

// Add this line to export the component as default
export default WeatherWidget;