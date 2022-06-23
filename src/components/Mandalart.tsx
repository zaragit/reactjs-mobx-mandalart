import { observer } from 'mobx-react-lite';
import { CorePlan } from '../store/mandalart';
import Board from './Board';
import MandalartPlan from './MandalartPlan';

export type MandalartProps = {
  size: number;
  gap: number;
  corePlan: CorePlan;
};

function Mandalart({ size, gap = 8, corePlan }: MandalartProps) {
  const halfGap = gap / 2;
  const itemSize = (size - gap * 2) / 3;

  return (
    <Board size={size} gap={halfGap}>
      {corePlan.detailPlans.slice(0, 4).map((plan, index) => (
        <MandalartPlan key={index} size={itemSize} gap={halfGap} plan={plan} />
      ))}
      <MandalartPlan size={itemSize} gap={halfGap} plan={corePlan} />
      {corePlan.detailPlans.slice(4, 8).map((plan, index) => (
        <MandalartPlan key={index} size={itemSize} gap={halfGap} plan={plan} />
      ))}
    </Board>
  );
}

export default observer(Mandalart);
