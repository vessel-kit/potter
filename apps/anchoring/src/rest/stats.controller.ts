import { Controller, Get } from '@nestjs/common';
import { RequestStorage } from '../storage/request.storage';
import { AnchorStorage } from '../storage/anchor.storage';
import { RequestStatus } from '../storage/request-status';
import { AnchoringScheduleService } from '../anchoring/anchoring-schedule.service';

@Controller('/api/v0/stats')
export class StatsController {
  constructor(
    private readonly requestStorage: RequestStorage,
    private readonly anchorStorage: AnchorStorage,
    private readonly anchoringSchedule: AnchoringScheduleService,
  ) {}

  @Get('/')
  async index() {
    const requestsTotalCount = await this.requestStorage.count();
    const anchorsTotalCount = await this.anchorStorage.count();
    const pendingRequests = await this.requestStorage.countByStatus(RequestStatus.PENDING);
    const cronJob = this.anchoringSchedule.get(this.anchoringSchedule.triggerAnchoring);
    const nextAnchoring = cronJob.nextDate().toDate()
    return {
      requestsTotalCount: requestsTotalCount,
      anchorsTotalCount: anchorsTotalCount,
      pendingRequests: pendingRequests,
      nextAnchoring: nextAnchoring.toISOString()
    };
  }
}
