import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TextInputCard({ label, placeholder }) {
  return (
    <Card className="bg-blue-50/40 border-blue-100 hover:shadow-sm transition-shadow">
      <CardContent className="p-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 flex-1">
          <Label className="text-sm font-semibold text-slate-700">{label}</Label>
          <p className="text-xs text-slate-400 italic mb-1">Type: Input Text</p>
          <Input type="text" placeholder={placeholder} className="bg-white border-slate-200" disabled />
        </div>
        <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:bg-slate-100">Edit Pertanyaan</Button>
      </CardContent>
    </Card>
  );
}