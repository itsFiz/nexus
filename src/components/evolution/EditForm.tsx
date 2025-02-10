import { useState } from 'react';
import { CompanyEvolution } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'react-hot-toast';
import { evolutionSchema } from '@/lib/validators/evolution';

type EditFormProps = {
  data: CompanyEvolution;
  onSave: (data: Partial<CompanyEvolution>) => Promise<void>;
  onCancel: () => void;
};

export function EditForm({ data, onSave, onCancel }: EditFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<CompanyEvolution>({
    resolver: zodResolver(evolutionSchema),
    defaultValues: data
  });

  const onSubmit = async (formData: CompanyEvolution) => {
    try {
      setIsLoading(true);
      await onSave(formData);
      toast.success('Changes saved successfully');
    } catch (error) {
      toast.error('Failed to save changes');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400">Structure</label>
          <Input {...form.register('structure')} />
          {form.formState.errors.structure && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.structure.message}
            </span>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-400">Valuation</label>
          <Input {...form.register('valuation')} />
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-2">
        <h3 className="font-medium">Team</h3>
        <div>
          <label className="text-sm text-gray-400">Total Members</label>
          <Input type="number" {...form.register('teamTotal')} />
        </div>
        {/* Add more team fields */}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
} 