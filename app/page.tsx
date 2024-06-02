"use client"
import { CommandDialogDemo } from '@/components/command-dialog-demo';
import { Card } from '@/components/ui/card';
import { CloudSun } from 'lucide-react';

export default function Home() {

  return (
    <div className="flex items-center justify-center absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]">
      <Card className="p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>
        <div className="mb-4">
          <CloudSun className="mx-auto w-[50px] h-[50px]" />
        </div>
        <div className="mt-6">
          <CommandDialogDemo />
        </div>
      </Card>
    </div>
  )
}
