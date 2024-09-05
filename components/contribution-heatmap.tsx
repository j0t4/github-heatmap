"use client"

import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data generation
const generateMockData = (year: number) => {
  const data = []
  const startDate = new Date(year, 0, 1)
  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    data.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 5)
    })
  }
  return data
}

const years = [2024, 2023, 2022, 2021, 2020]
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function ContributionHeatmap() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const contributions = generateMockData(selectedYear)

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100'
    if (count < 2) return 'bg-green-100'
    if (count < 3) return 'bg-green-300'
    if (count < 4) return 'bg-green-500'
    return 'bg-green-700'
  }

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{totalContributions} contributions in {selectedYear}</h2>
        <Select onValueChange={(value) => setSelectedYear(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 gap-1 mr-2 text-xs text-gray-400">
        <div className={`h-4  invisible' }`}>{" "}</div>
          {daysOfWeek.map((day, index) => (
            <div key={day} className={`h-4 ${index % 2 === 0 ? 'invisible' : ''}`}>{day}</div>
          ))}
        </div>
        <div>
          <div className="flex mb-1 text-xs text-gray-400 justify-between">
            {months.map((month) => (
              <div key={month} className="w-8">{month}</div>
            ))}
          </div>
          <div className="grid grid-cols-53 gap-1">
            {contributions.map((day) => (
              <TooltipProvider key={day.date}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className={`w-4 h-4 ${getColor(day.count)} rounded-sm`}></div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{day.count} contributions on {day.date}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-2 text-xs text-gray-400">
        <span className="mr-2">Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-4 h-4 ${getColor(level)} rounded-sm`}></div>
          ))}
        </div>
        <span className="ml-2">More</span>
      </div>
    </div>
  )
}