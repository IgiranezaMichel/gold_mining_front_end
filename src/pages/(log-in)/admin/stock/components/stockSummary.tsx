import { BarChart } from "@mui/icons-material"
import { Card } from "@mui/material"

export const StockSummary = () => {
  return <div className="md:flex gap-4">
  {[...new Array(4)].map(data=><Card key={data} className="flex items-center justify-between p-4 gap-2">
    <BarChart/>
    <div>
      <h1 className="text-lg font-bold">15 kg</h1>
      <p className="text-sm text-gray-500">Total stock value</p>
    </div>
  </Card>)}
  </div>
}