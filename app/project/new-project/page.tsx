'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const newProject = { ...data, id: 1 };
    console.log(newProject);
    try {
      router.push(`/project/${newProject.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue='' {...register('Project name')} />
        <input {...register('test', { required: true })} />
        {errors.test && <span>This field is required</span>}
        <input type='submit' />
      </form>
    </div>
  );
}
