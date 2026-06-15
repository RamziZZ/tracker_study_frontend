"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

export default function RadioInputCard({ label, options = [], hasOther = false }) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Card className="bg-blue-50/40 border-blue-100 hover:shadow-sm transition-shadow">
      <CardContent className="p-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div>
            <Label className="text-sm font-semibold text-slate-700">{label}</Label>
            <p className="text-xs text-slate-400 italic">Type: Pilihan Tunggal (Radio Button)</p>
          </div>
          
          <RadioGroup onValueChange={setSelectedValue} className="space-y-2">
            {options.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${label}-${idx}`} />
                <Label htmlFor={`${label}-${idx}`} className="text-sm text-slate-600 font-normal">{option}</Label>
              </div>
            ))}
            
            {hasOther && (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id={`${label}-other`} />
                <Label htmlFor={`${label}-other`} className="text-sm text-slate-600 font-normal">Lainnya, tuliskan:</Label>
              </div>
            )}
          </RadioGroup>

          {/* Kondisional jika memilih 'Lainnya' */}
          {hasOther && selectedValue === "other" && (
            <Input type="text" placeholder="Sebutkan opsi lainnya..." className="bg-white border-slate-200 mt-2 max-w-md animate-in fade-in duration-200" />
          )}
        </div>
        <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:bg-slate-100">Edit Pertanyaan</Button>
      </CardContent>
    </Card>
  );
}