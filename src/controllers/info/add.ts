import { Ctx, Param, Get, JsonController } from 'routing-controllers'
import { UserData } from 'user-info'
import { Context } from 'koa'
import { UserInfoModel } from '../../models/user/user-info'

@JsonController('/add')
export default class {
  @Get('/:name/:gender')
  async router(
    @Ctx() ctx: Context,
    @Param('name') name: string,
    @Param('gender') gender: number
  ) {
    try {
      if (!name || !gender) {
        return {
          code: 401,
          message: '缺少参数'
        }
      }

      let entity: UserData = {
        name,
        gender
      }

      // 创建举报记录
      createUser(entity).catch(err => {
        console.error(ctx, err, {
          type: 'insert',
          ...entity
        })
      })

      console.log(ctx.url, { entity })

      return {
        code: 200
      }
    } catch (e) {
      console.error(ctx, e)
      return {
        code: 500,
        message: '服务器错误'
      }
    }
  }
}

/**
 * 创建一个新的用户
 */
async function createUser({ name, gender }: UserData) {
  return (await UserInfoModel.create({
    name,
    gender
  })).save()
}
